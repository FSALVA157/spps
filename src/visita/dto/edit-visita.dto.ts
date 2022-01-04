import { PartialType } from '@nestjs/swagger';
import { CreateVisitaDto } from './create-visita.dto';

export class EditVisitaDto extends PartialType(CreateVisitaDto) {}
