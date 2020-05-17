function filterLogsByEnv(logs, env) {
  const filteredLogs = []

  logs.forEach((log) => {
    if (log.environment === env) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

function filterLogsOnDate(logs, dateFilter) {
  const filteredLogs = []
  const parsedDateFilter = new Date(dateFilter)
  console.log('parsedDateFilter.getUTCFullYear() is: ' , parsedDateFilter.getUTCFullYear())
  console.log('parsedDateFilter.getMonth() is: ', parsedDateFilter.getMonth())
  console.log('parsedDateFilter.getUTCDate() is: ', parsedDateFilter.getUTCDate())
  logs.forEach((log) => {
    const timestampDate = new Date(log.timestamp)

    console.group(log.timestamp)
    console.log('timestampDate.getUTCFullYear() is: ', timestampDate.getUTCFullYear())
    console.log('timestampDate.getUTCMonth() is: ', timestampDate.getMonth())
    console.log('timestampDate.getUTCDate() is: ', timestampDate.getUTCDate())
    console.groupEnd()

    if (parsedDateFilter.getUTCDate() === timestampDate.getUTCDate()) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

function filterLogs(logs, env, dateFilter) {
  const envLogs = filterLogsByEnv(logs, env)

  if (dateFilter) {
    return filterLogsOnDate(envLogs, dateFilter)
  } else {
    return envLogs
  }
}

module.exports = filterLogs
