import { define } from 'typeorm-seeding';
import { User } from '../user/user.entity';
import * as Faker from '@faker-js/faker';

define(User, (faker: typeof Faker) => {
    const user = new User();
    faker.faker.person.sex();
    user.firstName = faker.fakerEN_US.person.firstName();
    user.lastName = faker.fakerEN_US.person.lastName();
    user.age = faker.faker.number.int({ min: 18, max: 100 });
    user.gender = faker.faker.person.sex();
    user.issues = faker.faker.datatype.boolean({ probability: 0.5 });
    return user;
});
