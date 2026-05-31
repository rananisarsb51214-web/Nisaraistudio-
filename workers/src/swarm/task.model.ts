export class TaskQueue {
  async publish(task: Task) {
    console.log("[QUEUE] task published", task.id);

    // GCP Pub/Sub or Kafka integration point
  }
}export type Task = {
  id: string;
  type: "compute" | "analysis" | "generation";
  payload: any;
  priority: number;
  createdAt: number;
};import "./swarm/bootstrap";