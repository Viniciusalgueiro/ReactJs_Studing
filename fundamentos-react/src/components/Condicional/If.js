/* eslint-disable import/no-anonymous-default-export */
export default props => { 
    if(props.test) {
        return props.children.filter(child =>{
            return child.type && child.type.name === 'Else'
        })[0]
    } else {
        return false 
    }
}

export const Else = props => props.children 