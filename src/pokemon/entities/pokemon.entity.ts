import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema() // Decorador que indica que es un schema de base de datos
// Extendemos de Document, lo cual añade funcionalidades definidas por mongoose
export class Pokemon extends Document {
  // id: string -> Mongo lo genera automaticamente

  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
