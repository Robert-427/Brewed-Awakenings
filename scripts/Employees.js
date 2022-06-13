import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const findQuantity = (employee) => {
    let orderQuantity = 0
    for (const order of orders) {
        if (order.employeeId === employee.id) {
            orderQuantity ++
        }
    }
    return orderQuantity
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("employee")) {
        const [, employeeId] = itemClicked.id.split("--")

        for (const employee of employees) {
            if (employee.id === parseInt(employeeId)) {
                const quantity = findQuantity(employee)
                window.alert(`${employee.name} sold ${quantity} products`)
            }
        }
    }
}
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

