import { Avatar } from "@/interfaces";
import { Colors } from "@/interfaces/colors.enum";
import { Office } from "@/interfaces/office.interface";

export const offices: Office[] = [
    {
        details: {
            capacity: 25,
            email:"info@specno.com",
            contactNumber:"082 364 9864",
            address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
        },
        name: "Specno",
        totalStaff: 25,
        color: Colors.COLOR_1,
        id: "0",
        staff: [
            {
                id: "0",
                firstName: "Sabelo",
                lastName: "Mtetwa",
                avatar: Avatar.AVATAR_1
            },
            {
                id: "1",
                firstName: "Jacques",
                lastName: "Jordaan",
                avatar: Avatar.AVATAR_2
            },
            {
                id: "2",
                firstName: "Daniel",
                lastName: "Novitzkas",
                avatar: Avatar.AVATAR_3
            },
            {
                id: "3",
                firstName: "Brandon",
                lastName: "Watkins",
                avatar: Avatar.AVATAR_4
            }
        ]
    },
    {
        details: {
            capacity: 25,
            email:"info@specno.com",
            contactNumber:"082 364 9864",
            address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
        },
        name: "Specno",
        totalStaff: 25,
        color: Colors.COLOR_2,
        id: "1",
        staff: []
    },
    {
        details: {
            capacity: 25,
            email:"info@specno.com",
            contactNumber:"082 364 9864",
            address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
        },
        name: "Specno",
        totalStaff: 25,
        color: Colors.COLOR_3,
        id: "2",
        staff: []
    },
    {
        details: {
            capacity: 25,
            email:"info@specno.com",
            contactNumber:"082 364 9864",
            address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
        },
        name: "Specno",
        totalStaff: 25,
        color: Colors.COLOR_4,
        id: "3",
        staff: []
    },
    {
        details: {
            capacity: 25,
            email:"info@specno.com",
            contactNumber:"082 364 9864",
            address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
        },
        name: "Specno",
        totalStaff: 25,
        color: Colors.COLOR_5,
        id: "4",
        staff: []
    },
    {
        details: {
            capacity: 25,
            email:"info@specno.com",
            contactNumber:"082 364 9864",
            address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
        },
        name: "Specno",
        totalStaff: 25,
        color: Colors.COLOR_6,
        id: "5",
        staff: []
    }
]