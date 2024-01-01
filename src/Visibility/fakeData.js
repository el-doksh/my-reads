import { faker } from '@faker-js/faker';

export const createRandomUser = () => {
    return {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        data: [
            {
                id: faker.string.uuid(),
                name: faker.internet.userName(),
            },
            {
                id: faker.string.uuid(),
                name: faker.internet.userName(),
            }
        ]
        // email: faker.internet.email(),
        // avatar: faker.image.avatar(),
        // password: faker.internet.password(),
        // birthdate: faker.date.birthdate(),
        // registeredAt: faker.date.past(),
    }
}

export const usersList = faker.helpers.multiple(createRandomUser, {
  count: 10,
});