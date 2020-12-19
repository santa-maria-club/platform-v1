import { Injectable } from '@nestjs/common';

import { CreateGraphDto } from '@slippery/shared/utils/api-interface';

@Injectable()
export class GraphService {
  create(graphDto: CreateGraphDto) {
    console.log(graphDto);
    return { success: true };
  }
}
