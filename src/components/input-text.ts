import * as prompts from 'prompts'

export async function inputText(message: string, initial = ''): Promise<string> {
  const {value} = await prompts({
    type: 'text',
    name: 'value',
    message,
    initial,
  })

  return value
}
