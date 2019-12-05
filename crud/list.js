class ObjectList {
  constructor() {
    this.objects = []
  }
  add(object) {
    if(!this.objects.includes(object)) {
      this.objects.push(object)
    }
  }
  find(email) {
    return this.objects.find(
      object => object.email === email
    )
  }
  remove(email) {
    const object = this.find(email)
    if(object) {
      const index = this.objects.indexOf(object)
      this.objects.splice(index, 1)
    }
  }
}
module.exports = ObjectList
