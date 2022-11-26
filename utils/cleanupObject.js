const cleanupObject = (data) => {
  return Object.entries(data).reduce((acc, [key, val]) => {
    if (!val || !val.length) return acc
    acc[key] = val
    return acc
  }, {})
}

export {cleanupObject}
