import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../user/user.entity';

export default class SeedUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await factory(User)().createMany(1000000);
    }
}
