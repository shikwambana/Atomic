import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class details {
  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('idea', String, true)
  public idea: string = undefined;

  @JsonProperty('problem', String, true)
  public problem: string = undefined;

  @JsonProperty('reason', String, true)
  public reason: string = undefined;

  @JsonProperty('attendance', String, true)
  public attendance: string = undefined;

}