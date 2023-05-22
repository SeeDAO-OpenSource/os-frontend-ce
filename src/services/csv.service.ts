export function createFileInput(file: any): Promise<string> {
    return new Promise((resolve, reject)=>{
        let promise = new Promise((resolve) => {
              const reader = new FileReader()
              reader.onload = e => {
                resolve(reader.result)
              }
              reader.readAsText(file)
            })
            promise.then(result => resolve(result as string),
              error => reject(error)
            )
    })
  }
  