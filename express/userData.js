import userModel from './api/users/userModel';

const users = [{
        'username': 'user1',
        'password': 'secret1',
    },
    {
        'username': 'user2',
        'password': 'secret2',
    },
    {
        'username': 'user3',
        'password': 'secret3',
    },
    {
        'username': 'user4',
        'password': 'secret4',
    },
];


export default async function loadUsers() {

    try {
        await userModel.deleteMany();
        new userModel(users[0]).save();
        new userModel(users[1]).save();
        new userModel(users[2]).save();
        new userModel(users[3]).save();
        console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
    }
}