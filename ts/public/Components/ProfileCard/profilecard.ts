enum CardAttributes{
    'name' = 'name',
    'id' = 'id',
    'username' = 'username',
    'email' = 'email',

}


class ProfileCard extends HTMLElement{

    name = '';
    id = '';
    username = '';
    email = ''


    static get observedAttributes(): CardAttributes[] {
        return Object.keys(CardAttributes) as CardAttributes[];
    }


    attributeChangedCallback(prop: CardAttributes, _:string, newValue: string) : void {
        this[prop] = newValue;
        this.render()
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        }
    
    connectedCallback(){
        this.render();
    }
    

    render() {
        this.shadowRoot.innerHTML = `
        <link rel ="stylesheet" href="./components/ProfileCard/styles.css">
        
        
        <h4> ${this.name}</h4>
      
        <h4>${this.username}</h4>
        <h4>${this.email} Likes</h4>
       
        `;
    }
}

customElements.define('profile-card', ProfileCard)
export default ProfileCard