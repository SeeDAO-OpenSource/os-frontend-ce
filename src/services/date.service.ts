export default class DateService {

    static getDateString(datetime: number) {
        const dt = new Date(datetime)
        return `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`
    }

    static getMinMaxString(datetime: number) {
        const dt = new Date(datetime)
        return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
    }

    static getDatetimeFromMinMaxString(datestr: string) {
        const parts = datestr.split('-')
        return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])).getTime()

    }

}
