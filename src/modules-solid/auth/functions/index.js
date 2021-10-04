import {Session, handleIncomingRedirect, getDefaultSession} from '@inrupt/solid-client-authn-browser'

async function getAuthentication(session, setSession) {
    try {
      if (!session.info.isLoggedIn) {
        const params = new URLSearchParams(window.location.search);
        const solidCode = params.get("code");
        if (solidCode) {
          console.log("checking code param")
          await handleIncomingRedirect();
        } else {
          console.log('checking previous session data')
          await handleIncomingRedirect({ restorePreviousSession: true })
        }
        const s = getDefaultSession();
        setSession(s)
      }
    } catch (error) {
      console.log(`error`, error)
    }
  }

export {getAuthentication}