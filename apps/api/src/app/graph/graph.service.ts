import { Injectable } from '@nestjs/common';
import { promises } from 'fs';

import type { CreateGraphDto } from '@slippery/shared/utils/api-interface';

@Injectable()
export class GraphService {
  create(graphDto: CreateGraphDto) {
    return promises.writeFile(
      `${__dirname}/assets/graphs/${graphDto.name}.json`,
      JSON.stringify({
        ...graphDto,
        nodes: [],
        edges: [],
      })
    );
  }
}
