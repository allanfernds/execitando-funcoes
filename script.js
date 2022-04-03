let velocity = 150

let speedDown = (velocity, openDoors) => {
    while (velocity > 00) {
        velocity -= 20
        console.log("Velocidade atual:" + velocity)

    }

    if (velocity <= 0) {
        velocity = 0
        openDoors(velocity)
    }

}
let openDoors = () => {
    console.log("Nave Parada, as comportas ja podem ser abertas")
}
speedDown(velocity, openDoors)