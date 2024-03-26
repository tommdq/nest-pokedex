import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  // Importamos como .forFeature de nuestra entity, usando name de document y schema del schema exportado
  imports: [
    MongooseModule.forFeature([
      {
        name: Pokemon.name, // este name viene de document
        schema: PokemonSchema,
      },
    ]),
  ],
})
export class PokemonModule {}
