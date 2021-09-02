export const RECEIVE_APPS = 'RECEIVE_APPS'

export function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    apps: json
  }
}
