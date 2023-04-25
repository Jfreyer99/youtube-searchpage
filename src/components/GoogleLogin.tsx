import { useEffect, FC } from 'react'
import jwt_decode from 'jwt-decode'

interface AppProps{
children: string;
setUser: React.Dispatch<React.SetStateAction<{}>>,
user : {},
}

const GoogleLogin:FC<AppProps> = (props) => {


  const configValue : string = process.env.REACT_APP_CLIENT_ID

    const handleCallbackResponse = (response : any) => {
        let userObject : {} = jwt_decode(response.credential);
        props.setUser(userObject);

        let ele : HTMLElement | null = document.getElementById("signInDiv");
        if(ele !== null)
        {
          ele!.hidden = true;
        }
      }

      const handleSignOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            props.setUser({});
            let ele : HTMLElement | null = document.getElementById("signInDiv");
            if(ele !== null)
            {
              ele!.hidden = false;
            }
      }
    
      useEffect(() => {
        google.accounts.id.initialize({
          client_id: process.env.CLIENT_ID,
          callback: handleCallbackResponse
        });
        
        google.accounts.id.renderButton(
          document.getElementById("signInDiv")!,
          {theme: "outline", size: "large"}
        );

        google.accounts.id.prompt();

      }, []);

      return(
        <>
        <div id="signInDiv"></div>
        {
            Object.keys(props.user).length > 0 && <button onClick={(e) => handleSignOut(e)}> Sign Out</button>
        }
        { props.user && 
        <div>
            <img src={
                // @ts-ignore
                props.user.picture}
                >
            </img>
            <h3>
            {// @ts-ignore
            props.user!.name}
            </h3>
        </div>
        }
        </>
      )

}

export default GoogleLogin;