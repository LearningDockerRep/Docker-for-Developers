import faultsRouter from './api/controllers/faults/router';
import gamesRouter from './api/controllers/games/router';
import metricsRouter from './api/controllers/metrics/router';

export default function routes(app) {
  app.use('/faults', faultsRouter);
  app.use('/metrics', metricsRouter);
  app.use('/api/v2/games', gamesRouter);
}
