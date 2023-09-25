import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    let counter = 0;
    return {
        function1() {
            counter += 1;
            return {
              counter: `${counter}`
            }
        },
    }
  }
}
