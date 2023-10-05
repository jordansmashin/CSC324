// Groups

class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      const index = this.members.indexOf(value);
      if (index !== -1) {
        this.members.splice(index, 1);
      }
    }
  
    has(value) {
      return this.members.indexOf(value) !== -1;
    }
  
    static from(iterable) {
      const group = new Group();
      for (const value of iterable) {
        group.add(value);
      }
      return group;
    }
  }
  
  let group1 = new Group();
  group.add(1);
  group.add(2);
  group.add(3);
  // checks to make sure the add method is working properlly
  
  console.log(group.has(2)); 
  console.log(group.has(4)); 
  // checks to make sure the has method is working properlly
  
  group.delete(2);
  console.log(group.has(2)); 
  // checks to see that the delete method is working properlly
  
  let group2 = Group.from([4, 5, 6]);
  console.log(group2.has(5));
  // checks to make sure the static from method is working properlly
  