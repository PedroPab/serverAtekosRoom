import cors from "cors";

const crossOriginIsolated = (app) => {
  app.use(cors());
}

export default crossOriginIsolated;