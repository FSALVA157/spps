import { PartialType } from "@nestjs/swagger";
import { CreateUsuarioDto } from './create-usuario.dto';

export class EditUsuarioDto extends PartialType(CreateUsuarioDto){}