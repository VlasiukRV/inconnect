var users = [
    {
        "id": "56c782f18990ecf954f6e027",
        "name": 'Ewout van Zonneveld',
        "email": '',
        "password": '',
        "userAvatar": 'https://lh3.googleusercontent.com/-nbae2Oajx0g/AAAAAAAAAAI/AAAAAAAAAbU/h_-8EmrlLYQ/photo.jpg'
    }
]

var userSecurityScore = [
    {
        'securityScore': 86,
        'securityScoreStatus': 'GOOD',

        'securityScoreToday': 76,
        'securityScoreLastMonth': 84,
        'securityScoreAllTime': 84,
        'presenceToday': 47,
        'presenceLastMonth': 35,
        'presenceAllTime': 45
    }
]

var userNotifications = [
    {
        'id': '1',
        'name': 'Low battery level',
        'date': ''        
    },
    {
        'id': '2',
        'name': 'Detected smoke',
        'date': ''        
    }    
]

var userDevices = [
    {
        "id": "1",
        "name": "Backyard Camera",
        "deviceType": "Camera",
        "mfr": "Nest",
        "deviceInfo": {
            "status": "Armed",
            "is_online": true,
            "is_streaming": true
        }
    },
    {
        "id": "2",
        "name": "Front Yard Camera",
        "deviceType": "Camera",
        "mfr": "Nest",
        "deviceInfo": {
            "status": "Armed",
            "is_online": true,
            "is_streaming": true
        }
    },
    {
        "id": "3",
        "name": "Light Sensor 0",
        "deviceType": "Motion",
        "mfr": "Wirelesstag ",
        "deviceInfo": {
            "status": "Armed"
        }
    }
]

var insurance = [
    {
        "id": "0",
        "parent_id": "0",
        "isGrup": true,
        "name": "",

        "description": "",
        "value": 0
    },
    {
        "id": "10",
        "parent_id": "0",
        "isGrup": true,
        "name": "Buildings Insurance",

        "description": "Loss or damage to your building caused by: <ul> <li>Fire, Smoke, Explosion</li> <li>Weather (rain, air, snow)</li> <li>Intrusion (burglary, theft, vandalism, riots)</li> </ ul>",
        "value": 0
    },
    {
        "id": "11",
        "parent_id": "0",
        "isGrup": false,        
        "name": "Monitoring and Emergency",

        "description": "Monitoring improving safety in and around the house by: <ul> <li>Recommendations — Notifications — Alerts;</li> <li>Escalation according to intervention scenario </li> </ul>",
        "value": 0
    },
    {
        "id": "2",
        "parent_id": "0",
        "isGrup": false,
        "name": "Home Assistance",

        "description": "Arrange assitance to repair/mitigate the damage",
        "value": 1800
    },
    {
        "id": "3",
        "parent_id": "10",
        "isGrup": false,
        "name": "Main Building",

        "description": "",
        "value": 30000
    },
    {
        "id": "4",
        "parent_id": "10",
        "isGrup": false,
        "name": "Outbuildings",

        "description": "",
        "value": 10000
    },
    {
        "id": "5",
        "parent_id": "10",
        "isGrup": false,
        "name": "Garden",

        "description": "",        
        "value": 1000
    },
    {
        "id": "6",
        "parent_id": "10",
        "isGrup": false,
        "name": "Glass",

        "description": "",
        "value": 1000
    },
    {
        "id": "7",
        "parent_id": "0",
        "isGrup": true,
        "name": "Home Content Insurance",

        "description": "Loss or damage to your building caused by: <ul> <li>Fire, Smoke, Explosion</li> <li>Weather (rain, air, snow)</li> <li>Intrusion (burglary, theft, vandalism, riots)</li> </ ul>",
        "value": 0
    },
    {
        "id": "8",
        "parent_id": "7",
        "isGrup": false,
        "name": "General Coverage",

        "description": "",
        "value": 8000
    },
    {
        "id": "9",
        "parent_id": "7",
        "isGrup": false,
        "name": "Including Valuables with Single Limit",

        "description": "",
        "value": 100
    },
    {
        "id": "12",
        "parent_id": "7",
        "isGrup": false,
        "name": "Including Valuables with Total Limit",
        
        "description": "",
        "value": 200
    },
]

module.exports = {
    users: users,
    userDevices: userDevices,
    insurance: insurance,
    userSecurityScore: userSecurityScore,
    userNotifications: userNotifications
};