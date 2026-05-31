export class EphemeralWorker {
  async execute(task: any) {
    switch (task.type) {
      case "compute":
        return { result: task.payload.value * 2 };

      case "analysis":
        return { score: Math.random() * 100 };

      case "generation":
        return { text: "AI generated output" };

      default:
        return {};
    }
  }
}npm run build
npm start