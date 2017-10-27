export function language(db, request) {
  const id = request.params.id
  return {
    data: {
      type: 'languages',
      id: id,
      attributes: db.languages.find(id)
    }
  }
}

export function statement(db, request) {
  const id = request.params.id
  return {
    data: {
      type: 'statements',
      id: id,
      attributes: db.statement.find(id)
    }
  }
}

export function pair(db, request) {
  const id = request.params.id
  return {
    data: {
      type: 'pairs',
      id: id,
      attributes: db.pair.find(id)
    }
  }
}
