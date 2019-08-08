export default {
  data () {
    return {
      formErrors: {},
      wasValidated: false,
    }
  },
  computed: {
    form () {
      return this.$refs.form
    },
  },
  methods: {
    setErrorMessages () {
      let errors = {}
      for (let index = 0; index < this.form.elements.length; index++) {
        const element = this.form.elements[index]
        if (element.willValidate === true && !element.validity.valid) {
          errors[element.name] = element.validationMessage
        }
      }
      this.formErrors = errors
    },
    async checkField (e) {
      const element = e.target
      let message = ''
      if (element.willValidate === true && !element.validity.valid) {
        message = element.validationMessage
      } else {
        message = undefined
      }
      // check for reactivity
      if (this.formErrors.hasOwnProperty(element.name)) {
        this.formErrors[element.name] = message
      } else {
        Object.assign(this.formErrors, { [element.name]: message })
      }
    },
    async validate () {
      try {
        const result = this.form.checkValidity()
        if (!result) {
          this.setErrorMessages()
        }
        return result
      } catch (error) {
        throw new Error(error)
      }
    },
  }
}
