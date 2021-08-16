import { MongoClient, MongoClientOptions } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (url: string): Promise<void> {
    const options: MongoClientOptions = {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    }
    this.client = await MongoClient.connect(process.env.MONGO_URL, options)
  },

  async disconnect (): Promise<void> {
    this.client.close()
  }
}
