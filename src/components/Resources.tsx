import { useEffect, useState } from 'react';

import Keycloak from 'keycloak-js';
import keycloakConf from '../../keycloak.json';

export const Resources = () => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloak = new (Keycloak as any)(keycloakConf);
    keycloak
      .init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
      })
      .success((authenticated: any) => {
        setKeycloak(keycloak);
        setAuthenticated(authenticated);
      });
  }, []);

  if (keycloak) {
    return authenticated ? (
      <>
        <div className='my-12 grid place-items-center'>
          <p>
            This is a Keycloak-secured component of your application. You
            shouldn't be able to see this unless you've authenticated with
            Keycloak.
          </p>
          {/* {console.log(keycloak)} */}
          <button onClick={() => keycloak.logout()}>logout</button>
          <div>
            <img src='https://random.imagecdn.app/500/250' />
          </div>
        </div>
      </>
    ) : (
      <>
        <div className='my-12'>Unable to authenticate!</div>{' '}
      </>
    );
  }

  return (
    <>
      <div className='my-12'>Initializing Keycloak...</div>
    </>
  );
};
