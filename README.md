# approved-event-checker

This based on [taichi/approved-event-action](https://github.com/taichi/approved-event-action) action provide a way to identify approved PR.
Allowing us to consider changes requested

## Inputs

### `approvals`

**Optional** The number of unique approvals. Default `1`.

### `check_changes_requested`

**Optional** Checks if there's changes requested. Default `true`.

## Outputs

### `approved`

Pull Request is approved or not. if approved, value is `true` otherwise `false`;

## Example usage

    on: pull_request_review
    name: Example Job
    jobs:
      myJob:
        runs-on: ubuntu-latest
        steps:
        - uses: luisrjaeger/approved-event-checker@v1.0.0
          id: approved
          with:
            approvals: 2
            check_changes_requested: false
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        - run: echo "Approved !!"
          if: ${{ steps.approved.outputs.approved == 'true' }}
