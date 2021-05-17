
const user1 = {
    name: "Gerardo Gallegos",
    username: "luxfenix",
    country: "Mexico",
    social: {
        facebook: "https://fb....",
        twitter: "https://tw...."
    }
}

const saluda = ({ username: aliasCool, social: { twitter: tw }}) => {
    //const { twitter } = social

    const orden = [ 'pizza', 'te verde', 'pay', 124, false, 'otro']
    /* const comida = orden[0]
    const bebida = orden[1] */

    const [comida, bebida, postre, ...restantes] = orden

    console.log(
        restantes
    )
}

saluda(user1)