export type Task = {
  id: string;
  type: "compute" | "analysis" | "generation";
  payload: any;
  priority: number;
  createdAt: number;
};import "./swarm/bootstrap";