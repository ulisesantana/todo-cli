import * as prompts from 'prompts'

interface Choice {
    title: string;
    value: any;
    description?: string;
  }

export async function inputSelect(message: string, choices: Choice[], initial = 1): Promise<string> {
  const {value} = await await prompts({
    type: 'select',
    name: 'value',
    message,
    choices,
    initial,
  })

  return value
}
