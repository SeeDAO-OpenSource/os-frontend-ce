import config from "../config/server"
import sdk from "sendingnetwork-js-sdk"
import request from "request"

navigator.serviceWorker
  .register("/sw.js")
  .then((registration) => {
    console.log("SW registered: ", registration)
  })
  .catch((registrationError) => {
    console.log("SW registration failed: ", registrationError)
  })

var client = sdk.createClient({
  baseUrl: config.frontend.baseURL,
  request: request
})

function signMessage(wallet, message) {
  return new Promise((resolve, reject) => {
    window.ethereum
      .request({
        method: "personal_sign",
        params: [message, wallet, 0]
      })
      .then((sig) => {
        resolve(sig)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default class SendingMeService {
  static async getProfile() {}

  static sendText() {
    return new Promise((resolve, reject) => {
      var room_id = "!tUCGtSIJwNcOZeQbDZ:hs.sending.me"

      client
        .sendEvent(room_id, "从 SeeDAO OS 传来的谜之音")
        .then((res) => {
          console.log("post message successfully:", res)
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }

  static async login(wallet) {
    const prefix = "did:pkh:eip155:1:"

    console.error("wallet:::", wallet)
    const { data } = await client.getDIDList(`${wallet}`)
    console.error("data:::", data)
    let [did] = data
    if (!did) {
      const {
        did: newDid,
        message: cMessage,
        updated: cUpdated
      } = await client.createDID(`${prefix}${wallet}`)
      did = newDid
      console.error("did:::", did)
      let signature = await signMessage(wallet, cMessage)
      const dd = await client.saveDID(newDid, {
        signature,
        operation: "create",
        updated: cUpdated,
        address: `${prefix}${wallet}`
      })
      console.error("dd:::", dd)
    }

    const { message: lMessage, updated } = await client.preDIDLogin(did)
    let sign = await signMessage(wallet, lMessage)
    let identifier = {
      did,
      token: sign
    }
    let deviceId = localStorage.getItem("mx_device_id") || null
    let loginParams = {
      type: "m.login.did.identity",
      updated,
      identifier,
      device_id: deviceId
    }
    console.error("loginParams:::", loginParams)
    const { access_token, user_id, device_id } = await client.DIDLogin(
      loginParams
    )
    console.error("access_token:", access_token)
    console.error("user_id:", user_id)
    console.error("device_id:", device_id)

    client = sdk.createClient({
      baseUrl: config.frontend.baseURL,
      request: request,
      userId: user_id,
      accessToken: access_token
    })

    client.startClient()
    client.once("sync", function (state, prevState, res) {
      // const ROOM_ID = "!tUCGtSIJwNcOZeQbDZ@sdn_3cb0676d4f4D6224e2EC9d8Cf5d87a9B885a2210:3cb0676d4f4D6224e2EC9d8Cf5d87a9B885a2210"
      const ROOM_ID = "!tUCGtSIJwNcOZeQbDZ:hs.sending.me"
                       
      console.error(state) // state will be 'PREPARED' when the client is ready to use
      if (state === "PREPARED") {

      //   client.createRoom({
      //     name:"testroom202304112050", 
      // }).then((room_info) => {
      //     console.error("room_info:", room_info);
      // }).catch((err) => {
      //     console.error(err);
      // });


        var content = {
          "body": "<<<看到这则就代表成功了>>>",
          "msgtype": "m.text"
      };
      
      client.sendEvent(ROOM_ID, "m.room.message", content, "").then((res) => {
          console.error("post message successfully:", res);
      }).catch((err) => {
          console.error(err);
      })




      //   const roomId = session.roomService().createDirectRoom("@sdn_bFc14BC72590eB653AF0873d3401Fac602942Ad3:bFc14BC72590eB653AF0873d3401Fac602942Ad3".toLowerCase())

      //   client.joinRoom(ROOM_ID).then(room=>{
      //     console.log("joined successfully:", room);
      // }).catch((err) => {
      //     console.log(err);
      // });
        

        // client
        //   .sendEvent(room_id, "从 SeeDAO OS 传来的谜之音")
        //   .then((res) => {
        //     console.log("post message successfully:", res)
        //     resolve(res)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //     reject(err)
        //   })
      }
    })
    client.on("Room.timeline", function (event, room, toStartOfTimeline) {
      console.error(event.event)
    })
  }
}
