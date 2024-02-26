
export function AnimateNumberQuantidade(targetNumber, setter, duration) {

  const startTime = performance.now();

  const animate = (timestamp) => {
    const elapsed = timestamp - startTime;
    if (elapsed < duration) {
      const progress = (elapsed / duration) * targetNumber;
      setter(Math.min(Math.floor(progress), targetNumber));
      requestAnimationFrame(animate);
    } else {
      setter(targetNumber);
    }
  };

  const animationFrameId = requestAnimationFrame(animate);

  // Limpeza da animação quando o componente é desmontado
  return () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };
}
