// interface ข้อดี คือการทำ inheritance

//type alias
type Person = {
    firstname: string,
    lastname: string
}

//extend type ที่สร้างจาก type alias
interface UserInfo extends Person {
    role: string
}

const myUser: UserInfo = {
    firstname: 'Pawornwan',
    lastname: 'Sriprathung',
    role: 'Developer'
}

console.log(myUser)