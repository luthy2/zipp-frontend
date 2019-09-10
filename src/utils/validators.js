export default {
  validateLinkInput (link) {
    const exp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    let regexp = new RegExp(exp);
    if (link.match(regexp)) {
      return true
    } else {
      return false
    }
  },

  validateEmail (email) {
    const exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexp = new RegExp(exp)
    if (email.match(regexp)) {
      return true
    } else {
      return false
    }
  },

  validatePassword (pw) {
    if (pw.length < 7) {
      return true
    } else {
      return false
    }
  }
}
