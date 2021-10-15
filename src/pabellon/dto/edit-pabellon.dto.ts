import { PartialType } from "@nestjs/swagger";
import { CreatePabellonDto } from './create-pabellon.dto';

export class EditPabellonDto extends PartialType(CreatePabellonDto){}