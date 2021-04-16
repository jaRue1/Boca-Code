const hired = [ 'Rebecca', 'Todd', 'Jake']


const students = [
  {
    name: "Victoria",
    specialty: "Mfg",
  },
  {
    name: "Nikki",
    specialty: "Mfg",
  },
  {
    name: "Rebecca",
    hired: 'true',
  },
  {
    name: "Jake",
    hired: 'true',
  },
  {
    name: "Rue",
    hired: 'false',
  },
  {
    name: "Todd",
    hired: 'true',
  },
]
// returns all the people that are not hired
function candidates(array){
  return array.filter(stu => stu.hired !== 'true')
}
// returns all the people who are not in the hired array
function getHires(array,hired){
 return array.filter(stu => {return !hired.includes(stu.name)}
  )}

let hires = candidates(students)
console.log(hires)

let devs = getHires(students,hired)
console.log(devs)
