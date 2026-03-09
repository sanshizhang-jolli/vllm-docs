export default {
  logo: <span style={{ fontWeight: 700 }}>vLLM</span>,
  project: { link: 'https://github.com/vllm-project/vllm' },
  footer: { text: 'vLLM Documentation' },
  useNextSeoProps() {
    return { titleTemplate: '%s – vLLM' }
  },
}
