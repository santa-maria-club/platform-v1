import { Controller } from '@nestjs/common';
import { GraphService } from './graph.service';

@Controller('/graphs')
export class GraphController {
  constructor(private graphService: GraphService) {}
}
