
import { PartialType } from "@nestjs/swagger";
import { CreateMarcaCorporalDto } from "./create-marca-corporal.dto";

export class EditMarcaCorporalDto extends PartialType(CreateMarcaCorporalDto) {

}
