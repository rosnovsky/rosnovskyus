import React from 'react'
import { type } from 'os'

const defaultState = {
  postLanguage: 'Russian',
  setPostLanguage: () => {},
}

const LangContext = React.createContext(defaultState)

class LangProvider extends React.Component {
  state = {
    postLanguage: defaultState.postLanguage,
  }

  setPostLanguage = language => {
    this.setState({ postLanguage: language })
    try {
      localStorage.setItem('postLanguage', language)
    } catch (err) {}
  }

  componentDidMount() {
    let postLanguage
    try {
      postLanguage = localStorage.getItem('postLanguage')
    } catch (err) {}

    if (!postLanguage && typeof navigator !== 'undefined') {
      const userLang = navigator.language || navigator.userLanguage
      postLanguage = userLang === 'ru-RU' ? 'Russian' : 'English'
    }
    if (postLanguage) {
      this.setState({ postLanguage })
    }
  }

  render() {
    const { children } = this.props
    const { postLanguage } = this.state
    return (
      <LangContext.Provider
        value={{
          postLanguage,
          setPostLanguage: this.setPostLanguage,
        }}
      >
        {children}
      </LangContext.Provider>
    )
  }
}

export default LangContext

export { LangProvider }
