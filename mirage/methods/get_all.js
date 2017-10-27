export function pairs(db) {
  return {
    data: db.pairs.map(attrs=> {
      const relationships = {
        statements: {
          data: attrs.statements.map(statement=> {
            return { type: 'statements', id: statement.toString() }
          })
        }
      }
      return { type: 'pairs', id: attrs.id, attributes: attrs, relationships: relationships }
    })
  }
}

export function languages(db) {
  return {
    data: db.languages.map(attrs=> {
      return { type: 'languages', id: attrs.id, attributes: attrs }
    })
  }
}

export function statements(db) {
  return {
    data: db.statements.map(attrs=> {
      return { type: 'statements', id: attrs.id, attributes: attrs }
    })
  }
}
