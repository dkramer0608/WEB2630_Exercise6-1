export const countMixin = {
    filters: {
      reverseText(value) {
        return value
          .split("")
          .reverse()
          .join("");
      }
    },
  
    computed: {
      textReverseComputed() {
        return this.textCom
          .split("")
          .reverse()
          .join("");
      },
  
      textCountComputed() {
        return this.textCount.concat(this.textCount.length);
      }
    }
  };