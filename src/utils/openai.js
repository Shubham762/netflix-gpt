import OpenAI from 'openai';
import {OPEN_AI_GPT_KEY} from './constants'
const openai = new OpenAI({
  apiKey: OPEN_AI_GPT_KEY, // This is the default and can be omitted
dangerouslyAllowBrowser: true 
});

export default openai;