class Node {
    value = null;
    nextNode = null;

    constructor(value, nextNode) {
      this.value = value;
      this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
    }

    append(value) {
      const newNode = new Node(value);

      if (this.head === null) {
          this.head = newNode;
          return;
      }

      let current = this.head;
      while (current.nextNode !== undefined){
          current = current.nextNode;
      }
      current.nextNode = newNode;
    }

    prepend(value) {
      const newNode = new Node(value, this.head);
      this.head = newNode;
    }

    size() {
      let count = 0;
      let current =this.head;
      while(current) {
          count++;
          current = current.nextNode;
      }
      return count;
    }

    head() {
      return this.head;
    }

    tail() {
      if (this.head === null) return null;
  
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return current;
    }
    
    at(index) {
      if (index < 0) return null;
      let current = this.head;
      let count = 0;
      while (current !== null) {
        if (count === index) return current;
        current = current.nextNode;
        count++;
      }
      return null;
    }
    
    pop() {
      if (!this.head) return;
  
      if (this.head.nextNode === null) {
        this.head = null;
        return;
      }
  
      let current = this.head;
      while (current.nextNode.nextNode !== null) {
        current = current.nextNode;
      }
  
      current.nextNode = null;
    }

    contains(value) {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    }
  
    find(value) {
      let current = this.head;
      let index = 0;
      while (current !== null) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    }
    
    toString() {
      let current = this.head;
      let result = '';
      while (current !== undefined) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      result += 'null';
      return result;
    }

    insertAt(value, index) {
      if (index < 0) return;
    
      const newNode = new Node(value);
    
      if (index === 0) {
        newNode.nextNode = this.head;
        this.head = newNode;
        return;
      }
    
      let current = this.head;
      let previous = null;
      let count = 0;
    
      while (current !== null && count < index) {
        previous = current;
        current = current.nextNode;
        count++;
      }
      
      if (previous) {
        previous.nextNode = newNode;
        newNode.nextNode = current;
      }
    }

    removeAt(index) {
      if (index < 0 || this.head === null) return;
    
      if (index === 0) {
        this.head = this.head.nextNode;
        return;
      }
    
      let current = this.head;
      let previous = null;
      let count = 0;
    
      while (current !== null && count < index) {
        previous = current;
        current = current.nextNode;
        count++;
      }
    
      if (previous && current) {
        previous.nextNode = current.nextNode;
      }
    }
}

export default LinkedList;